#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CPlayer_ObserverServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_2013[0x18];
    uint8_t m_iObserverMode;
    char pad_3474[0x3];
    char m_hObserverTarget[0x4];
    client_ObserverMode_t m_iObserverLastMode;
    bool m_bForcedObserverMode;
    char end_pad_3475[0x3];
};
