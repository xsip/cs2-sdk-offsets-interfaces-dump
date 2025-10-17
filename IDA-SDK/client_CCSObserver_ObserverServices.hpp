#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class client_CCSObserver_ObserverServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    uint8_t m_iObserverMode;
    char pad_826[0x3];
    char m_hObserverTarget[0x4];
    client_ObserverMode_t m_iObserverLastMode;
    bool m_bForcedObserverMode;
    char pad_827[0x3];
    float32 m_flObserverChaseDistance;
    entity2_GameTime_t m_flObserverChaseDistanceCalcTime;
    char vTable824[0x4];
    client_ObserverInterpState_t m_obsInterpState;
    char end_pad_825[0x80];
};
