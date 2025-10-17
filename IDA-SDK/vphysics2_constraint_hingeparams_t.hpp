#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "vphysics2_constraint_axislimit_t.hpp"
#include "vphysics2_constraint_breakableparams_t.hpp"

class vphysics2_constraint_hingeparams_t {
    Vector worldPosition;
    Vector worldAxisDirection;
    vphysics2_constraint_axislimit_t hingeAxis;
    vphysics2_constraint_breakableparams_t constraint;
};
