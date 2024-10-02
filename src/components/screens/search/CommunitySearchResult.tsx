import { Link } from '@/i18n/routing';

import { SheetClose } from '@/components/ui/sheet';
import BoardTypeLabel from '@/components/domain/board/BoardTypeLabel';

import { BOARD_TYPE, type CommunityCategory } from '@/types/domain/boardType';

interface CategorySearchResultProps {
  categories: CommunityCategory[];
}

const CategorySearchResult = ({ categories }: CategorySearchResultProps) => {
  return (
    <ul className="flex flex-col justify-center gap-y-6 h2-m">
      {categories.map((category) => (
        <li key={category.categoryId} className="cursor-pointer">
          <Link href={`/community/${category.categoryId}`}>
            <SheetClose className="w-full">
              <BoardTypeLabel
                boardType={BOARD_TYPE.COMMUNITY}
                boardName={category.categoryName}
                iconSize={20}
                className="gap-x-3 text-white"
              />
            </SheetClose>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default CategorySearchResult;