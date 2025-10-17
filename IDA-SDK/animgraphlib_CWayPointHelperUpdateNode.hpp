#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"

class animgraphlib_CWayPointHelperUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable250[0x4];
    float32 m_flStartCycle;
    float32 m_flEndCycle;
    bool m_bOnlyGoals;
    bool m_bPreventOvershoot;
    bool m_bPreventUndershoot;
    char end_pad_251[0x1];
};
