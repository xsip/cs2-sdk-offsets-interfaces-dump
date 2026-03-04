#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CRenderSkeleton {
    char m_bones[0x18];
    char pad_372[0x18];
    char m_boneParents[0x18];
    int32_t m_nBoneWeightCount;
    char end_pad_373[0x4];
};
