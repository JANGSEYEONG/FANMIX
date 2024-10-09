import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import { ENERGY, ORIGINALITY, TONE } from '@/constants/contentTraits';

interface ContentTraitsProps {
  originalityScore: number | null; // 대중적-독창적
  toneScore: number | null; // 가벼운-진지한
  energyScore: number | null; // 차분한-역동적
}

const ContentTraits = ({ originalityScore, toneScore, energyScore }: ContentTraitsProps) => {
  const t = useTranslations('content_trait');

  const traitList = useMemo(
    () => [
      {
        key: 'originality',
        trait: originalityScore !== null ? ORIGINALITY[originalityScore - 1] : null,
      },
      {
        key: 'tone',
        trait: toneScore !== null ? TONE[toneScore - 1] : null,
      },
      {
        key: 'energy',
        trait: energyScore !== null ? ENERGY[energyScore - 1] : null,
      },
    ],
    [originalityScore, toneScore, energyScore],
  );

  return (
    <ul className="flex-center">
      {traitList.map(({ key, trait }, index) => (
        <li key={key} className="flex flex-1 items-center">
          <div className="flex-1 gap-0.5 text-lime-400 flex-col-center">
            {trait ? (
              <>
                <trait.ICON className="h-[22px] w-[22px]" />
                <div className="text-white body3-m">{t(trait.LABEL)}</div>
              </>
            ) : (
              '-'
            )}
          </div>
          {index !== traitList.length - 1 && (
            <Separator
              orientation="vertical"
              className="mx-0.5 h-[60px] w-[1px] flex-shrink-0 bg-neutral-500"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContentTraits;
