#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class CCSPlayer_WaterServices {
    char _vtable_pad_635[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char pad_636[0x10];
    float32 m_flWaterJumpTime;
    Vector m_vecWaterJumpVel;
    float32 m_flSwimSoundTime;
    char end_pad_315[0x14];
};
