#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributePathPositions.hpp"

class smartprops_CSmartPropSelectionCriteria_PathPosition {
    char vTable2573[0x8];
    CSmartPropAttributeBool m_bEnabled;
    smartprops_CSmartPropAttributePathPositions m_PlaceAtPositions;
    CSmartPropAttributeInt m_nPlaceEveryNthPosition;
    CSmartPropAttributeInt m_nNthPositionIndexOffset;
    CSmartPropAttributeBool m_bAllowAtStart;
    CSmartPropAttributeBool m_bAllowAtEnd;
};
