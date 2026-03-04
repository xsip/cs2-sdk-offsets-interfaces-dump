#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_WaterServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_2013[0x18];
    char pad_3091[0x48];
    entity2_GameTime_t m_NextDrownDamageTime;
    int32_t m_nDrownDmgRate;
    entity2_GameTime_t m_AirFinishedTime;
    float32 m_flWaterJumpTime;
    Vector m_vecWaterJumpVel;
    float32 m_flSwimSoundTime;
    char end_pad_3566[0x18];
};
