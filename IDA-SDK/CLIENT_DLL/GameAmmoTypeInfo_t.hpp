#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CRangeInt.hpp"
#include "CRangeFloat.hpp"

class GameAmmoTypeInfo_t {
    char _vtable_pad_11[0x10];
    int32_t m_nMaxCarry;
    char pad_12[0x8];
    CRangeInt m_nSplashSize;
    AmmoFlags_t m_nFlags;
    float32 m_flMass;
    CRangeFloat m_flSpeed;
    char end_pad_13[0x4];
    int32_t m_nBuySize;
    int32_t m_nCost;
    char end_pad_1070[0x10];
};
