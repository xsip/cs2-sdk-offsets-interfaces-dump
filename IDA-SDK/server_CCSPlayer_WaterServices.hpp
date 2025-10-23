#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_WaterServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    char pad_3432[0x40];
    entity2_GameTime_t m_NextDrownDamageTime;
    int32_t m_nDrownDmgRate;
    entity2_GameTime_t m_AirFinishedTime;
    float32 m_flWaterJumpTime;
    Vector m_vecWaterJumpVel;
    float32 m_flSwimSoundTime;
    char end_pad_3431[0x18];
};
