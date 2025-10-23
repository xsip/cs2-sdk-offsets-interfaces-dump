#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_CGameChoreoServices {
    char pad_2645[0x8];
    char m_hOwner[0x4];
    char m_hScriptedSequence[0x4];
    client_ScriptState_t m_scriptState;
    client_ChoreoState_t m_choreoState;
    entity2_GameTime_t m_flTimeStartedState;
    char end_pad_2728[0x4];
};
