#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CPlayer_ObserverServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    uint8_t m_iObserverMode;
    char pad_3349[0x3];
    char m_hObserverTarget[0x4];
    client_ObserverMode_t m_iObserverLastMode;
    bool m_bForcedObserverMode;
    char end_pad_3350[0x3];
};
