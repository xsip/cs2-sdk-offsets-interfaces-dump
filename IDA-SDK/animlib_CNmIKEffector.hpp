#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmIKEffector {
    int32_t m_nBodyIndex;
    bool m_bEnabled;
    char pad_2525[0x3];
    Vector m_vTargetPosition;
    char pad_2526[0xc];
    Quaternion m_qTargetOrientation;
    float32 m_flWeight;
    char end_pad_2527[0xc];
};
