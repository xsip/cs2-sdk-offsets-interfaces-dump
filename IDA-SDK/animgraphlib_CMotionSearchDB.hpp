#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CMotionSearchNode.hpp"
#include "animgraphlib_CProductQuantizer.hpp"

class animgraphlib_CMotionSearchDB {
    animgraphlib_CMotionSearchNode m_rootNode;
    animgraphlib_CProductQuantizer m_residualQuantizer;
    char m_codeIndices[0x18];
};
