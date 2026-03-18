#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_CCommentarySystem {
    void **__vftable_0;
    void **__vftable_1;
    char __vftable_pad[1];
    bool m_bCommentaryConvarsChanging;
    bool m_bCommentaryEnabledMidGame;
    char pad_2819[0x1];
    entity2_GameTime_t m_flNextTeleportTime;
    int32_t m_iTeleportStage;
    bool m_bCheatState;
    bool m_bIsFirstSpawnGroupToLoad;
    char pad_2820[0x1a];
    char m_hCurrentNode[0x4];
    char m_hActiveCommentaryNode[0x4];
    char m_hLastCommentaryNode[0x4];
    char pad_2821[0x4];
    char m_vecNodes[0x18];
};
