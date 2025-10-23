#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_RadioServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    entity2_GameTime_t m_flGotHostageTalkTimer;
    entity2_GameTime_t m_flDefusingTalkTimer;
    entity2_GameTime_t m_flC4PlantTalkTimer;
    entity2_GameTime_t m_flRadioTokenSlots[3];
    bool m_bIgnoreRadio;
    char end_pad_3429[0x7];
};
