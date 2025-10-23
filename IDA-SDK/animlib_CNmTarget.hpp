#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmTarget {
    CTransform m_transform;
    CGlobalSymbol m_boneID;
    bool m_bIsBoneTarget;
    bool m_bIsUsingBoneSpaceOffsets;
    bool m_bHasOffsets;
    bool m_bIsSet;
    char end_pad_1773[0x4];
};
