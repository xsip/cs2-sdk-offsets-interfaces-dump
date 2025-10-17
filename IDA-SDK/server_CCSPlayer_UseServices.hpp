#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_UseServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    char pad_3352[0x40];
    char m_hLastKnownUseEntity[0x4];
    entity2_GameTime_t m_flLastUseTimeStamp;
    entity2_GameTime_t m_flTimeLastUsedWindow;
    char end_pad_3431[0x4];
};
