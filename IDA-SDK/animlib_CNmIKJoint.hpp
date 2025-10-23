#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmIKJoint {
    int32_t m_nParentIndex;
    int32_t m_nBodyIndex;
    char pad_1721[0x8];
    CTransform m_xLocalFrame;
    float32 m_flSwingLimit;
    float32 m_flMinTwistLimit;
    float32 m_flMaxTwistLimit;
    float32 m_flWeight;
};
