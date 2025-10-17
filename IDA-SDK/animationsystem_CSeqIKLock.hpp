#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSeqIKLock {
    float32 m_flPosWeight;
    float32 m_flAngleWeight;
    int16_t m_nLocalBone;
    bool m_bBonesOrientedAlongPositiveX;
    char end_pad_439[0x1];
};
