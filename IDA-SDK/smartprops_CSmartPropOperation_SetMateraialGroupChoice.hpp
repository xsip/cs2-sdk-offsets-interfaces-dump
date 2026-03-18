#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeChoiceSelectionMode.hpp"

class smartprops_CSmartPropOperation_SetMateraialGroupChoice {
    void **__vftable_0;
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2654[0x8];
    CUtlString m_VariableName;
    smartprops_CSmartPropAttributeChoiceSelectionMode m_SelectionMode;
    CSmartPropAttributeInt m_ChoiceSelection;
    char m_MaterialGroupChoices[0x18];
};
