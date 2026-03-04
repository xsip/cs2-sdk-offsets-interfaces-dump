#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimParamID.hpp"

class animgraphlib_CAnimParameterBase {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CUtlString m_group;
    modellib_AnimParamID m_id;
    char pad_39[0x14];
    CUtlString m_componentName;
    char pad_40[0x18];
    bool m_bNetworkingRequested;
    bool m_bIsReferenced;
    char end_pad_41[0x6];
};
