#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class client_CPlayer_ObserverServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_2012[0x18];
    uint8_t m_iObserverMode;
    char pad_1614[0x3];
    char m_hObserverTarget[0x4];
    client_ObserverMode_t m_iObserverLastMode;
    bool m_bForcedObserverMode;
    char pad_1615[0x3];
    float32 m_flObserverChaseDistance;
    entity2_GameTime_t m_flObserverChaseDistanceCalcTime;
};
