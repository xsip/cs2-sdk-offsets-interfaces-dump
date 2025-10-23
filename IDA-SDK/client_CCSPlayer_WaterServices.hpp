#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CCSPlayer_WaterServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    float32 m_flWaterJumpTime;
    Vector m_vecWaterJumpVel;
    float32 m_flSwimSoundTime;
    char end_pad_878[0x14];
};
