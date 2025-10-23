#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_CCommentarySystem {
    char vTable2722[0x11];
    bool m_bCommentaryConvarsChanging;
    bool m_bCommentaryEnabledMidGame;
    char pad_2723[0x1];
    entity2_GameTime_t m_flNextTeleportTime;
    int32_t m_iTeleportStage;
    bool m_bCheatState;
    bool m_bIsFirstSpawnGroupToLoad;
    char pad_2724[0x1a];
    char m_hCurrentNode[0x4];
    char m_hActiveCommentaryNode[0x4];
    char m_hLastCommentaryNode[0x4];
    char pad_2725[0x4];
    char m_vecNodes[0x18];
};
