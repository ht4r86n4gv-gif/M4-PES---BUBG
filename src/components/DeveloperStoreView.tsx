import React, { useState, useEffect } from 'react';
import { Crown, Trophy, Sparkles, Upload, Camera } from 'lucide-react';
import { DeveloperContactSection } from './DeveloperContactSection';

export const DeveloperStoreView: React.FC = () => {
  const [developerPhoto, setDeveloperPhoto] = useState<string>(
    '/assets/developer_photo.jpg'
  );

  useEffect(() => {
    const savedPhoto = localStorage.getItem('m4_developer_photo');
    if (savedPhoto) {
      setDeveloperPhoto(savedPhoto);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setDeveloperPhoto(result);
        localStorage.setItem('m4_developer_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-5 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-1 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold">
          <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>المطور الرسمي ومتجر M4 PES</span>
        </div>
        <h1 className="text-xl font-black text-white">M4 PES - عن المطور</h1>
        <p className="text-xs text-slate-400">الوجهة الأولى والأكثر موثوقية في الوطن العربي لشحن وبيع حسابات إي فوتبول موبايل.</p>
      </div>

      {/* Developer Profile Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/80 border border-amber-500/40 p-6 text-center space-y-4 shadow-2xl gold-glow">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* 150px x 150px Developer Photo with 4px Gradient Border & Soft Red Glow */}
        <div className="relative mx-auto flex items-center justify-center">
          <div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(135deg, #FFD700 0%, #0066FF 50%, #8B00FF 100%)',
              boxShadow: '0 0 30px rgba(255, 0, 0, 0.3), 0 10px 25px rgba(0,0,0,0.5)',
            }}
            className="relative flex items-center justify-center overflow-visible group"
          >
            {/* Inner Circle Container with Red Background */}
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#991b1b', // Premium deep red background
                overflow: 'hidden',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={developerPhoto}
                alt="M4 (مطور التطبيق)"
                onError={(e) => {
                  // If custom file not yet found on disk, fallback to red-toned developer portrait
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
                  }
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              {/* Optional Camera Overlay to change/upload directly if attachment was missed */}
              <label
                htmlFor="dev-photo-input"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-white text-[10px] font-bold gap-1"
                title="تحديث الصورة"
              >
                <Camera className="w-5 h-5 text-amber-400" />
                <span>تحديث الصورة</span>
              </label>
              <input
                id="dev-photo-input"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>

            {/* Gold Crown Badge at Bottom-Right */}
            <div
              style={{
                background: '#FFD700',
                boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
              className="absolute bottom-1 right-1 w-8 h-8 rounded-full border-2 border-slate-950 flex items-center justify-center text-slate-950 shadow-md"
            >
              <Crown className="w-4 h-4 fill-slate-950" />
            </div>
          </div>
        </div>

        {/* Exact Text Below Photo */}
        <div className="space-y-1">
          <h2 className="text-lg font-black text-white">M4 (مطور التطبيق)</h2>
          <p className="text-xs text-amber-400 font-bold">خبير مجتمع ومطور إي فوتبول موبايل</p>
          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            "نحن نقدم أفضل تجربة وأسرع خدمة لجميع اللاعبين العرب. ثقتكم هي راس مالنا ودعمكم هو سر استمرارنا"
          </p>
        </div>

      </div>

      {/* Developer Contact Section Component */}
      <DeveloperContactSection />

      {/* Store Services */}
      <div className="space-y-3 pt-1">
        <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>خدمات متجر M4 الحصرية</span>
        </h3>

        <div className="space-y-2.5">
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              👑
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">بيع حسابات إيبيك أسطورية</h4>
              <p className="text-[11px] text-slate-400">حسابات جاهزة مع ميسي، كرويف، رونالدو وباقات الديفارشن.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
              🪙
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">شحن كوينز إي فوتبول المعتمد</h4>
              <p className="text-[11px] text-slate-400">شحن آمن وسريع بأسعار تنافسية وضمان كامل.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">استشارات وتطوير التشكيلات</h4>
              <p className="text-[11px] text-slate-400">مساعدة مباشرة لرفع مستوى فريقك إلى الدرجة الأولى.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
