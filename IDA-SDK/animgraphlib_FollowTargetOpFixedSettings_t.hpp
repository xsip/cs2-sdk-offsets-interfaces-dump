#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_FollowTargetOpFixedSettings_t {
    int32_t m_boneIndex;
    bool m_bBoneTarget;
    char pad_282[0x3];
    int32_t m_boneTargetIndex;
    bool m_bWorldCoodinateTarget;
    bool m_bMatchTargetOrientation;
    char end_pad_283[0x2];
};
