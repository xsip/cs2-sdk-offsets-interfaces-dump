#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CBlendCurve.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CSelectorUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable209[0x8];
    char m_children[0x18];
    char m_tags[0x18];
    char pad_210[0x4];
    animgraphlib_CBlendCurve m_blendCurve;
    char m_flBlendTime[0x8];
    animgraphlib_CAnimParamHandle m_hParameter;
    char pad_211[0x2];
    int32_t m_nTagIndex;
    animgraphlib_SelectorTagBehavior_t m_eTagBehavior;
    bool m_bResetOnChange;
    bool m_bLockWhenWaning;
    bool m_bSyncCyclesOnChange;
    char end_pad_212[0x5];
};
