#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmBoneWeightList {
    CResourceName m_skeletonName;
    char m_boneIDs[0x18];
    char m_weights[0x18];
};
