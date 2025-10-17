#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimParamID.hpp"

class animgraphlib_CVirtualAnimParameter {
    char vTable38[0x18];
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
    CUtlString m_expressionString;
    animgraphlib_AnimParamType_t m_eParamType;
    char end_pad_248[0x7];
};
