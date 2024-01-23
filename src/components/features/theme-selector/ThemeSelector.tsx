import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import React from 'react';

export const ThemeSelector = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="ml-auto flex items-center text-xs">
      <button
        onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
        className="relative z-[2] h-6 min-h-[20px] w-11 min-w-[36px] cursor-pointer appearance-none overflow-hidden rounded-3xl border border-solid p-0 [&_*]:box-content"
        title={t('header.theme')}
      >
        <div className="absolute inset-y-0 left-0 m-auto h-5 w-5 overflow-hidden rounded-[50%] border-[3px] border-solid border-transparent shadow-[inset_0_0_0_2px_#a5abba] transition-transform duration-[0.3s] ease-[ease] dark:translate-x-[17px]">
          <div className="relative h-full w-full overflow-hidden rounded-[50%] before:relative before:left-2/4 before:float-left before:h-full before:w-full before:bg-[#a5abba] before:content-[''] before:[transition:border-radius_0.3s_ease,width_0.3s_ease,height_0.3s_ease,left_0.3s_ease,transform_0.3s_ease] dark:before:left-[40%] dark:before:h-[85%] dark:before:w-[150%] dark:before:translate-x-[-10%] dark:before:translate-y-[-40%] dark:before:rotate-[-35deg] dark:before:rounded-[50%]" />
        </div>
      </button>
    </div>
  );
};
