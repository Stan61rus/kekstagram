import { getRandomNumber } from './util';

interface MyComment {
  id: number;
  avatar: string;
  message: string;
  name: string;
}

interface MyPhoto {
  id: number;
  url: string;
  description: string;
  likes: number;
  comments: MyComment[];
}

type PhotosArray = MyPhoto[];

const names: string[] = [
  'Алексей',
  'Елена',
  'Иван',
  'Ольга',
  'Дмитрий',
  'Анна',
];

const sentences: string[] = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/**
 * Возвращает случайное имя из заданного списка.
 * @returns {string} - Случайное имя.
 */
const getRandomAuthorName = (): string => {
  const randomIndex: number = getRandomNumber(0, names.length - 1);
  return names[randomIndex];
};

/**
 * Возвращает случайное предложение из заданного списка.
 * @returns {string} - Случайное предложение.
 */
const getRandomCommentMessage = (): string => {
  const randomIndex: number = getRandomNumber(0, sentences.length - 1);
  return sentences[randomIndex];
};

/**
 * Создает комментарий с случайными данными.
 * @returns {MyComment} - Объект комментария.
 */
const createComment = (): MyComment => ({
  id: getRandomNumber(1, 1000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomCommentMessage(),
  name: getRandomAuthorName(),
});

/**
 * Создает фотографию с случайными данными.
 * @param {number} id - Идентификатор фотографии.
 * @returns {MyPhoto} - Объект фотографии.
 */
const createPhoto = (id: number): MyPhoto => {
  const commentsCount: number = getRandomNumber(0, 30);
  const comments: MyComment[] = Array.from(
    { length: commentsCount },
    createComment
  );

  return {
    id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomNumber(15, 200),
    comments,
  };
};

/**
 * Генерирует массив фотографий с случайными данными.
 * @param {number} [length=25] - Длина массива фотографий (по умолчанию 25).
 * @returns {PhotosArray} - Массив фотографий.
 */
const generatePhotosArray = (length: number = 25): PhotosArray =>
  Array.from({ length }, (_, index) => createPhoto(index + 1));

export {
  getRandomNumber,
  getRandomAuthorName,
  getRandomCommentMessage,
  createComment,
  createPhoto,
  generatePhotosArray,
  names,
  sentences,
};
