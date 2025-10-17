#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"

class animgraphlib_CTurnHelperUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable297[0x4];
    animgraphlib_AnimValueSource m_facingTarget;
    float32 m_turnStartTimeOffset;
    float32 m_turnDuration;
    bool m_bMatchChildDuration;
    char pad_298[0x3];
    float32 m_manualTurnOffset;
    bool m_bUseManualTurnOffset;
    char end_pad_299[0x7];
};
