#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "tier2_CRangeInt.hpp"
#include "tier2_CRangeFloat.hpp"

class client_AmmoTypeInfo_t {
    void **__vftable_0;
    void **__vftable_1;
    int32_t m_nMaxCarry;
    char pad_1358[0x8];
    tier2_CRangeInt m_nSplashSize;
    client_AmmoFlags_t m_nFlags;
    float32 m_flMass;
    tier2_CRangeFloat m_flSpeed;
    char end_pad_1359[0x4];
};
