#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeDirection.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_SaveDirection {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    smartprops_CSmartPropAttributeDirection m_DirectionVector;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpace;
    CUtlString m_VariableName;
};
