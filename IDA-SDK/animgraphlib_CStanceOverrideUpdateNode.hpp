#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CStanceOverrideUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char m_footStanceInfo[0x18];
    animgraphlib_CAnimUpdateNodeRef m_pStanceSourceNode;
    animgraphlib_CAnimParamHandle m_hParameter;
    char pad_227[0x2];
    animgraphlib_StanceOverrideMode m_eMode;
};
