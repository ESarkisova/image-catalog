import {createSelector} from "reselect";

const getIsGroupSlc = (state) => {
    return state.image.isGroup;
};
export const getImagesSlc = (state) => {
    return state.image.images;
};

export const getImagesRslc = createSelector(
    [getImagesSlc, getIsGroupSlc],
    (images, isGroup) => {
        if (isGroup) {
            return images.reduce((acc, img) => {

                if (!acc[img.tag]) {
                    acc[img.tag] = [];
                }

                acc[img.tag].push(img);

                return acc;
            }, []);
        }
        return images;
    }
);
