#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"

class animgraphlib_CTurnHelperUpdateNode {
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
    animgraphlib_AnimValueSource m_facingTarget;
    float32 m_turnStartTimeOffset;
    float32 m_turnDuration;
    bool m_bMatchChildDuration;
    char pad_263[0x3];
    float32 m_manualTurnOffset;
    bool m_bUseManualTurnOffset;
    char end_pad_264[0x7];
};
