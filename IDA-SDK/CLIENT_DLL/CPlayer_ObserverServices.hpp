#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"
#include "GameTime_t.hpp"

class CPlayer_ObserverServices {
    char _vtable_pad_635[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char pad_636[0x10];
    uint8_t m_iObserverMode;
    char pad_263[0x3];
    char m_hObserverTarget[0x4];
    ObserverMode_t m_iObserverLastMode;
    bool m_bForcedObserverMode;
    char pad_264[0x3];
    float32 m_flObserverChaseDistance;
    GameTime_t m_flObserverChaseDistanceCalcTime;
};
