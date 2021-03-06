/* 
* @author Eric Lewis <elewis at boxy.co>
* @created 25.7.2012 
* @website www.boxy.co
 */


PHP.Modules.prototype.log = function( variable ) {
    var COMPILER = PHP.Compiler.prototype,
    VARIABLE = PHP.VM.Variable.prototype;
    
    var num = variable[ COMPILER.VARIABLE_VALUE ];
    
    return new PHP.VM.Variable( Math.log(num) );
};