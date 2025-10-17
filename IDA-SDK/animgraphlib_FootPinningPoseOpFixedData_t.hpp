#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_FootPinningPoseOpFixedData_t {
    char m_footInfo[0x18];
    float32 m_flBlendTime;
    float32 m_flLockBreakDistance;
    float32 m_flMaxLegTwist;
    int32_t m_nHipBoneIndex;
    bool m_bApplyLegTwistLimits;
    bool m_bApplyFootRotationLimits;
    char end_pad_266[0x6];
};
