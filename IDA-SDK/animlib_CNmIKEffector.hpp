#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmIKEffector {
    int32_t m_nBodyIndex;
    bool m_bEnabled;
    char pad_1751[0x3];
    Vector m_vTargetPosition;
    char pad_1752[0xc];
    Quaternion m_qTargetOrientation;
    float32 m_flWeight;
    char end_pad_1753[0xc];
};
