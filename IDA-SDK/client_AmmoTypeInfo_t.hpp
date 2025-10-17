#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "tier2_CRangeInt.hpp"
#include "tier2_CRangeFloat.hpp"

class client_AmmoTypeInfo_t {
    char vTable574[0x10];
    int32_t m_nMaxCarry;
    char pad_575[0x8];
    tier2_CRangeInt m_nSplashSize;
    client_AmmoFlags_t m_nFlags;
    float32 m_flMass;
    tier2_CRangeFloat m_flSpeed;
    char end_pad_576[0x4];
};
