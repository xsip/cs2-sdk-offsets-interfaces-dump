#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeDirection.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_SaveDirection {
    void **__vftable_0;
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2635[0x8];
    smartprops_CSmartPropAttributeDirection m_DirectionVector;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpace;
    CUtlString m_VariableName;
};
