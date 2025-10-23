#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_CreateSizer {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    CUtlString m_Name;
    CSmartPropAttributeBool m_bDisplayModel;
    CSmartPropAttributeFloat m_flInitialMinX;
    CSmartPropAttributeFloat m_flInitialMaxX;
    CSmartPropAttributeFloat m_flConstraintMinX;
    CSmartPropAttributeFloat m_flConstraintMaxX;
    CUtlString m_OutputVariableMinX;
    CUtlString m_OutputVariableMaxX;
    CSmartPropAttributeFloat m_flInitialMinY;
    CSmartPropAttributeFloat m_flInitialMaxY;
    CSmartPropAttributeFloat m_flConstraintMinY;
    CSmartPropAttributeFloat m_flConstraintMaxY;
    CUtlString m_OutputVariableMinY;
    CUtlString m_OutputVariableMaxY;
    CSmartPropAttributeFloat m_flInitialMinZ;
    CSmartPropAttributeFloat m_flInitialMaxZ;
    CSmartPropAttributeFloat m_flConstraintMinZ;
    CSmartPropAttributeFloat m_flConstraintMaxZ;
    CUtlString m_OutputVariableMinZ;
    CUtlString m_OutputVariableMaxZ;
};
