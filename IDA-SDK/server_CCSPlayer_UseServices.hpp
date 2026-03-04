#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_UseServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_2013[0x18];
    char pad_3476[0x48];
    char m_hLastKnownUseEntity[0x4];
    entity2_GameTime_t m_flLastUseTimeStamp;
    entity2_GameTime_t m_flTimeLastUsedWindow;
    char end_pad_3565[0x4];
};
