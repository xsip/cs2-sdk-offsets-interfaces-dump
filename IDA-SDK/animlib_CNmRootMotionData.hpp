#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmRootMotionData {
    char m_transforms[0x18];
    int32_t m_nNumFrames;
    float32 m_flAverageLinearVelocity;
    float32 m_flAverageAngularVelocityRadians;
    char pad_1758[0xc];
    CTransform m_totalDelta;
};
