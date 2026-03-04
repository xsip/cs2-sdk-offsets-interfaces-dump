#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"

class animgraphlib_CWayPointHelperUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char __vftable_pad[4];
    float32 m_flStartCycle;
    float32 m_flEndCycle;
    bool m_bOnlyGoals;
    bool m_bPreventOvershoot;
    bool m_bPreventUndershoot;
    char end_pad_276[0x1];
};
