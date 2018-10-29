
// TODO: Plan out the layout inflation mechanism

export enum LayoutItemType {
    HORIZONTAL_GROUP = 'horizontal_group',
    VERTICAL_GROUP = 'vertical_group',
    CONTENT = 'content',
}

export type LayoutItem = VerticalGroup | HorizontalGroup | Content;

export interface HorizontalGroup {
    type: LayoutItemType.HORIZONTAL_GROUP;
    weight: number;
    items: LayoutItem[];
}

export interface VerticalGroup {
    type: LayoutItemType.VERTICAL_GROUP;
    weight: number;
    items: LayoutItem[];
    reverse: boolean;
    scrollable: boolean;
}

export interface Content {
    type: LayoutItemType.CONTENT;
    weight: number;
    contentType: 'span' | 'block';
}

export enum LimitTier {
    FREE = 'free',
    SHARED = 'shared',
    CONSERVE = 'conserve',
}

export interface Constraints {
    heightLimit: LimitTier;
    widthLimit: LimitTier;
}

export interface View {
    type: 'text' | 'wire' | 'solid';
    children: View[];
    layout: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: number;
        height: number;
    };
}

export interface NavLink {
    key: string;
    targetSceneKey: string;
}