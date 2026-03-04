#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CBlendCurve.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CSelectorUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    char m_children[0x18];
    char m_tags[0x18];
    char pad_216[0x4];
    animgraphlib_CBlendCurve m_blendCurve;
    char m_flBlendTime[0x8];
    animgraphlib_CAnimParamHandle m_hParameter;
    char pad_217[0x2];
    int32_t m_nTagIndex;
    animgraphlib_SelectorTagBehavior_t m_eTagBehavior;
    bool m_bResetOnChange;
    bool m_bLockWhenWaning;
    bool m_bSyncCyclesOnChange;
    char end_pad_218[0x5];
};
