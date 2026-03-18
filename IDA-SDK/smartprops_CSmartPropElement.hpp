#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropElement {
    void **__vftable_0;
    int32_t m_nElementID;
    char pad_2640[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
};
